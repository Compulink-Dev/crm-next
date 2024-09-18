import NewHeader from '@/app/(dashboard)/_components/NewHeader'
import React from 'react'
import Form from '../_components/Form'



function NewReceipts() {

    return (
        <div className=''>
            <NewHeader title='New certification' link='hr/certification' />
            <div className="">
                <Form />
            </div>
        </div>
    )
}

export default NewReceipts