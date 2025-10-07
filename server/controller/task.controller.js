import Task from "../models/task.model.js";

export const createTask = async(req, res) =>{
    try{
        const {title, description, userId, role, date} = req.body;
        if(!title || !description || !userId || !date)
        {
            return res.status(400).json({err : "Missing Fields"});
        }
        if(role !== "admin")
        {
            return res.status(404).json({message : "Only Admins can Add Task"})
        }
        const task = await Task.create({
            title,
            description,
            assignedTo:userId,
            dueDate: new Date(date)
        });
        res.status(201).json({message : "Task created Successfully", task});
    }catch(err)
    {
        console.log(err);
        res.status(500).json({Error : "Internal Server Error"});
    }
}

export const getTask = async(req, res) =>{
    try{
        const {status, assignedTo, page=1, limit=10} = req.query;

        const filter = {};
        if(status)
        {
            filter.status = status;
        }
        if(assignedTo)
        {
            filter.assignedTo = assignedTo;
        }

        const skip = (page - 1)*limit;

        const tasks = await Task.find(filter)
        .populate("assignedTo", "name email")
        .skip(skip)
        .limit(parseInt(limit))
        .sort({createdAt : -1});

        const total = await Task.countDocuments(filter);

        res.status(200).json({
            total,
            page : Number(page),
            limit : Number(limit),
            totalPages : Math.ceil(total / limit),
            tasks
        })
    }catch(err)
    {   
        console.log(err);
        res.status(500).json({Error : "Internal Server Error"});
    }
}

export const updateTask = async(req, res) =>{
    try{
        const {taskId} = req.params;
        const {title, description, dueDate, status} = req.body;
        const task = await Task.findById(taskId);
        if(!task)
        {
            return res.status(400).json({err : "The Task does not exist"});
        }
        const updates = {};
        if(title)
        {
            updates.title = title
        }
        if(description)
        {
            updates.description = description
        }
        if(status)
        {
            updates.status = status
        }
        if(dueDate)
        {
            updates.dueDate = new Date(dueDate)
        }
        const updatedTask = await Task.findByIdAndUpdate(taskId, updates, {
            new : true,
            runValidators : true
        })

        res.status(200).json({
            message : "Task Updated Successfully",
            task : updatedTask
        })
    }catch(err)
    {
        console.log(err);
        res.status(500).json({Error : "Internal Server Error"})
    }
}