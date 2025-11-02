const Book = require('../models/Book');

const getAllbooks = async(req,res)=>{
    const allBooks = await Book.find({})
    try{
        if(allBooks?.length>0){
        res.status(201).json({
            success :true,
            message:'all books are get',
            data:allBooks

        })
    }else{
        res.status(404).json({
            message:'not avilable'

        })
    }
    


}catch(e){
    console.log(e)
    res.status(404).json({
            success:false,
            message:'please check the error'
        })
}
}
const getSinglebook = async(req,res)=>{
    try{
        bookId = req.params.id;
        singleBook = await Book.findById(bookId);
        if(!bookId){
                res.status(404).json({
                success:false,
                message:'the provided id id not find'
            })
        }else{
            res.status(201).json({
            success :true,
            message:'all books are get',
            data:singleBook
            })

        }


    }catch(e){
        console.log(e)
        res.status(404).json({
            success:false,
            message:'please check the error'
        })

    }
}
const AddNewbook = async(req,res)=>{
    try{
        const newBookFormData = req.body;
        const newelyCreatedBook = await Book.create(newBookFormData)
        if(newelyCreatedBook){
            res.status(201).json({
                success:true,
                message : 'book is added successfully ',
                data : newelyCreatedBook
            })
        }

    }catch(e){
        console.log(e);
        res.status(404).json({
            success:false,
            message:'please check the error'
        })
        

    }

}
const updatebook = async(req,res)=>{
    try{
        const updateBookfromdata = req.body;
        const updatebookId = req.params.id;
        const updatebook = await Book.findByIdAndUpdate(updatebookId,updateBookfromdata,{new:true})
        if(!updatebook){
            res.status(404).json({
                success:false,
                message:'the provided id id not find to updaate'
            })

        }else{
            res.status(200).json({
                success:true,
                message:'updated successfully',
                data:updatebook
            })
        }

    }catch(e){
        console.log(e)
        res.status(404).json({
            success:false,
            message:'please check the error'
        })
    }

}
const deletebook = async(req,res)=>{
    try{
        const deletId = req.params.id;
        const delBook = await Book.findByIdAndDelete(deletId)
        if(!delBook){
                res.status(404).json({
                success:false,
                message:'the provided id id not find'
                })
        }else{
            
            res.status(200).json({
                success:true,
                messagge:"the provided id book was deleted",
                data:delBook
            })
        }

    }catch(e){
        console.log(e)
        res.status(404).json({
            success:false,
            message:'please check the error'
        })
    }

}

module.exports = {getAllbooks,getSinglebook,AddNewbook,updatebook,deletebook}