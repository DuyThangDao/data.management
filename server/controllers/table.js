import { TableModel } from "../models/TableModel.js";

export const getData = async(req,res)=>{
    try{
        const data =  await TableModel.find();
        console.log('[getData]',data);
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({error: err});
    }
}

export const createData = async(req,res)=>{
    try{
        const newData = req.body;
        console.log(req.body);
        const data = new TableModel(newData);
        await data.save();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({error : err});
    }
}

export const deleteData = async(req,res)=>{
    try{
        const tableRowId = req.params.tableRowId;
        console.log(tableRowId);
        if(tableRowId){
            const data = await TableModel.findOneAndDelete({_id: tableRowId});
            res.status(200).json(data);
        }else{
            res.status(400).json({error:'Invalid delete data'});
        }
        
    }
    catch(err){
        res.status(500).json({error : err});
    }
}

export const editData = async(req,res)=>{
    try{
        const editData = req.body;
        if (editData && editData._id) {
            const data = await TableModel.findOneAndUpdate(
                {_id: editData._id},
                editData,
                {new: true}
            );
            res.status(200).json(data);
        } else {
            res.status(400).json({error: 'Invalid update data'});
        }
    }
    catch(err){
        res.status(500).json({error : err});
    }
}