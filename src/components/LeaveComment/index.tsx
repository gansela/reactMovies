import React from "react";
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { connect } from "react-redux"
import { saveNewComment } from "../../redux/actions"

class LeaveComment extends React.Component<any, any>{

    constructor(props: any) {
        super(props)

        this.state = { comment: "", movie: "" }
    }

    componentDidMount() {
        const { mov } = this.props
        this.setState({ movie: mov })
    }

    commentOperation = (commentText: string): void => {
        this.setState({ comment: commentText })

    }
    render() {
        const { onSaveComment, oldComments } = this.props
        const { movie, comment } = this.state

        return (
            <div style={{ position: "relative", margin: "20px", left: "0%" }}>

                <TextareaAutosize aria-label="minimum height" style={{width: "40%" ,margin: "15px", verticalAlign:"top" }} rows={3} placeholder="wtite your comment" onChange={(e) => {
                    this.commentOperation(e.target.value)
                }} />
                <Button variant="contained" color="primary" size="large" style={{ margin: "15px", verticalAlign:"top" }} onClick={() => {
                    onSaveComment(comment, movie, oldComments)
                }}>Send Comment</Button>
            </div>
        )

    }
}

const mapDispatch = (dispatch: any) => {
    return {
        onSaveComment: (comment: string, movie: any, oldComments: any) => {
    
            const comments = oldComments? {...oldComments, [movie] : comment }: {[movie] : comment}
            console.log(comments)
            dispatch(saveNewComment(comments))
        }
    }
}

export default connect(null, mapDispatch)(LeaveComment)