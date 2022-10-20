import React from "react";
import './AddFile.css';
import { useState } from "react";
import Popup from "../Popup/Popup";

function AddFile() {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    return(
        <div className="add">
            <form className="form">
                <table>
                  <tbody>
                  <tr>
                      <td> 
                        <label> رقم الملف</label>
                      </td>
                      <td>
                        <input type="text"  />
                      </td>
                      
                    </tr>
                    <tr>
                      <td>
                         <label>رقم الموكل</label>
                      </td>
                      <td>
                        <input type="text"  />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label> اسم الموكل</label>
                      </td>
                      <td>
                        <input type="text"  />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>  الاطراف</label>
                      </td>
                      <td>
                        <input type="text"  />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>  المحكمة</label>
                      </td>
                      <td>
                        <input type="text"  />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>  تاريخ الجلسة</label>
                      </td>
                      <td>
                        <input type="date"  />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>  القاضي</label>
                      </td>
                      <td>
                        <input type="date"  />
                      </td>
                    </tr>
                  </tbody>
                    
                </table>
                <button type="button" className="cancel">  إلغاء  </button>
                <button type="button"  onClick={togglePopup} className="open" data-target="#popup_add_doc"> إضافة إجراء </button>
                <input type="submit" value=" إضافة " />
                {isOpen && <Popup
                content={<>
                <form>
                  <div className="popuphead">إضافة إجراء</div>
                  <table className="popupbody">
                    <tbody>
                      <tr>
                        <td>
                         <label>  إجراء</label>
                        </td>
                        <td>
                         <input type="text"  />
                        </td>
                      </tr>
                      <tr>
                        <td>
                         <label>  ملاحظات</label>
                        </td>
                        <td>
                         <input type="text"  />
                        </td>
                      </tr>
                      <tr>
                        <td>
                         <label>  تاريخ الجلسة المقبلة</label>
                        </td>
                        <td>
                         <input type="date"  />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="button" className="cancel">  إلغاء  </button>
                  <input type="submit" value=" إضافة " />
                </form>
                 </>}
                handleClose={togglePopup}
                />}
            </form>
            
        </div>
    )

}

export default AddFile ;


