import React from "react";
import styled from "styled-components";
import UserTags from "UseTags";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button";
import Layout from "../../../components/Layout/Layout";

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  ul{
  margin: 0 -12px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li{
      padding: 4px 16px;
      display: inline-block;
      border-radius: 10px;
      background: #82ffe0;
      font-size: 14px;
      white-space: nowrap;
      margin: 8px 12px;
      &.selected{
        background: chocolate;
      }
    }
  }
  button{
  font-family: inherit;
  background: none;
  border: none;
  padding: 2px 4px;
  border-bottom: 1px solid #333;
  color: #666;
  }
`;

type Pros =  {
    selected:number[],
    onChange:(selected:number[])=>void
}

const TagsSections:React.FunctionComponent<Pros> = (props:Pros)=>{
    let{tags,onAddTag,open,dialogOpen,dialogClose} = UserTags()
    const selectedTagIds = props.selected
    const onToggleTag  = (tagId:number)=>{
        const index  =selectedTagIds.indexOf(tagId)
        if(index>=0){
            props.onChange(selectedTagIds.filter(t=>t!==tagId))
        }else{
            props.onChange([...selectedTagIds,tagId])
        }
    }
    const getClass = (tagsId:number) =>{
        return selectedTagIds.indexOf(tagsId) >=0?'selected':''
    }
    return(
        <Wrapper>
            <ul>
                {tags.map(tag=>{
                    return <li key={tag.id} onClick={()=>onToggleTag(tag.id)} className={getClass(tag.id)}>{tag.name}</li>
                })}
            </ul>
            <button onClick={dialogOpen}>新增标签</button>
            <Dialog open={open} onClose={dialogClose} aria-labelledby="form-dialog-title" fullWidth={true}
                    maxWidth='xs'>
                <DialogTitle id="form-dialog-title">添加一个标签</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="标签名"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={dialogClose} color="primary">
                        取 消
                    </Button>
                    <Button onClick={dialogClose} color="primary">
                        确 定
                    </Button>
                </DialogActions>
            </Dialog>
        </Wrapper>
    )
}
export {TagsSections}