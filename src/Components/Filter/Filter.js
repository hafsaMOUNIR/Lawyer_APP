import React, {useState} from 'react';
import { BsFilterCircle, BsCircle } from 'react-icons/bs';
import './Filter.css'

function Filter() {
    const [filterOpen, setFilterOpen] = useState(false);
    const [calenderOpen, setCalendarOpen] = useState(false);
    const [fileIdOpen, setFileIdOpen] = useState(false);
    return (
        <div className='filter-section'>

            <div className='contentDown'>
                <button onClick={() => setFilterOpen(!filterOpen)}>
                    <BsFilterCircle />
                    <p>تصنيف ب:</p>
                </button>
            </div>

            
            {filterOpen && (
                <div className='items-active'>
                    <div className='filter-btn'>
                        <button onClick={() => setCalendarOpen(!calenderOpen)}>
                            <div className='item-btn'>
                                <BsCircle />
                                <p>التاريخ</p>
                            </div>
                        </button>
                        <div>{calenderOpen && (
                            <input
                                id='date'
                                name='date'
                                type='date'
                            />
                        )}</div>
                    </div>


                    <div className='filter-btn'>
                        <button onClick={() => setFileIdOpen(!fileIdOpen)}>
                            <div className='item-btn'>
                                <BsCircle />
                                <p>رقم الملف</p>
                            </div>
                        </button>
                        {fileIdOpen && (
                            <input
                                id='fileId'
                                name='fileId'
                                type='text'
                                placeholder='أدخل رقم الملف...'
                            />
                        )}</div>
                </div>
            )
            }
        </div>
    )
}

export default Filter