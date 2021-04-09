import { React } from 'react'
import { Image } from 'antd';
import MaterialTable from 'material-table';
import { useHistory } from "react-router-dom";
import _ from 'lodash'

const Columns = [
    { title: 'Avatar', field: 'avatar', type: "String", render: rowData => <Image src={rowData.avatar} /> },
    { title: 'Name', field: 'name', type: "String" },
    { title: 'Address', field: 'location', type: "String" },
]

export default function TableFrom(props) {
    let history = useHistory();

    function handleDetail(rowData){
        history.push({
            pathname:`/Detail/${rowData.name}`,
            state: rowData,
        })
    }
    return (
        <div>
            <MaterialTable
                title="Danh sách các User "
                columns={Columns}
                data={props.data}
                editable={{
                    onRowUpdate: ((newData, oldData) => {
                        console.log('Update user')
                    }),
                    onRowDelete: ((oldData) => {
                        console.log('delete')
                    }),
                }}
                    actions={
                        [
                        {
                            icon: 'save',
                            tooltip: 'Detail',
                            onClick: (event, rowData) => {handleDetail(rowData)}
                        }
                        ]}
                    />
        </div>
    )
}