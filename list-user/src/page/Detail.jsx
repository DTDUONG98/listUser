import {React, useState ,useEffect } from 'react'
import {Grid} from '@material-ui/core'
import {Image} from 'antd'
import _ from 'lodash'
import '../App.css'

export default function Detail(props){
    const [detailUser, setDetailUser] = useState([]);
    useEffect(() => {
        getDataDetail()
    },[])
    const getDataDetail =  () => {
       let data = props.location.state
       console.log('data Detail',data)
       setDetailUser(data)
    }
    return(
        <div> 
            <h1 style={{textAlign: 'center', padding: 50, color: 'red', fontFamily: 'sans-serif'}}>Detail User</h1> 
            <Grid container spacing={3} className="box-detail">
                <Grid item xs={6} className="image-detail">
                    <Image 
                        width = {300}
                        src={detailUser.avatar}
                    />
                </Grid>
                <Grid item xs={6}>
                        <p>Name : {detailUser.name}</p>
                        <p>Age : {detailUser.age}</p>
                        <p>Gender : {detailUser.gender}</p>
                        <p>Address : {detailUser.location} </p>
                        <p>Email : {detailUser.email} </p>
                        <p>Phone : {detailUser.phone} </p>
                        <p>Cell : {detailUser.cell} </p>
                </Grid>
            </Grid>
        </div>
    )
}