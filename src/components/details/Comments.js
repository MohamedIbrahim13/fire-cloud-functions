import React from 'react'
import CommentSummary from './CommentSummary'
import {motion} from 'framer-motion';


const containerVariants ={
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
    transition:{
      delay:2.5,
      duration:1.5
    }
  }
};
const Comments = ({replies,twiitId}) => {
    return (
        
            <motion.div className="list-group"  variants={containerVariants} initial="initial" animate="animate">
                {replies && replies.map(reply=>{
                    while(reply.twid === twiitId){
                        return (<CommentSummary reply={reply}  key={reply.id}/>);
                    }
                        
                })}
            </motion.div>

    )
}

export default Comments
