import { useState, useEffect } from "react";
import SubNav from "../../SubNav";
import NoTags from "./NoTags";
import TagsEdit from "./TagsEdit";

interface Tag {
  id:number
  TagName: string;
}

let Tags = () => {
  let token = localStorage.getItem("userData");

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [tagNames, setTagNames] = useState<Tag[]>([]);

  const [tagName, setTagName] = useState<Tag[]>([]);

  //......................... xử lý post 1 tag mới................................//

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTagName({ ...tagName, [name]: value });
  };

  const handleAdd = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/tag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(tagName),
      });

      if (response.ok) {
        const data = await response.json();
        let tagName: string = data.metadata.TagName;
        let tagId: number = data.metadata.id;
        console.log("Add new tag successful:", data);
        setTagNames((prev: any) => [...prev, tagName]);
      } else {
        const errorData = await response.json();
        console.error("Add new tag failed:", errorData);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  useEffect(() => {
    // useEffect này sẽ chạy mỗi khi tagNames thay đổi
    console.log("Tag names changed:", tagNames);
  }, [tagNames]);

  //..............................................................................//
  

  //............................. xử lý Update 1 tag..............................//

  let tagId:number 

  const [selectedTag, setSelectedTag] = useState({
    TagName: "",
  }); // Thêm state để lưu trữ thẻ đang được chọn

  const handleEditClick = () => {
    setSelectedTag(selectedTag);
  };

  const handleEditTags = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/tag/${tagId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(selectedTag), // Chuyển đổi dữ liệu thành chuỗi JSON
      });

      if (!response.ok) {
        throw new Error("Không thành công");
      }
      // Xử lý dữ liệu phản hồi (nếu cần)
      const responseData = await response.json();
      console.log("Dữ liệu phản hồi:", responseData);
    } catch (error) {
      console.error("Lỗi khi thực hiện yêu cầu PUT:", error);
    }
  };

  //..............................................................................//

  //............................. xử lý DELETE 1 tag..............................//

  //..............................................................................//

  return (
    <>
      <div className="container showFolder">
        <SubNav titleNav="Thẻ" titleBtn="Extension" />
        <div className="tagManager">
          <h4 id="header">Quản lý thẻ</h4>
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-2" id="leftTags">
              <p>
                Xác định thẻ để cho các thành viên trong dự án có thể sử dụng
              </p>
              <div id="">
                <h5>Thêm thẻ tùy chỉnh</h5>
                <hr />
                <div id="rowTags">
                  <div className="col-80 inpTags">
                    <input
                      type="text"
                      name="TagName"
                      placeholder="Tên thẻ"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-20">
                    <button className="btnTags" onClick={handleAdd}>
                      Thêm
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-8" id="rightTags">
              <div className="row" id="headerTags">
                <div className="col nameHeader">Tags</div>
                <div className="col-xl-2 actionHeader">Actions</div>
              </div>

              <div>
                {tagNames.length === 0 ? (
                  <NoTags />
                ) : (
                  <ul className="listTags">
                    {tagNames.map((item: any, index: any) => (
                      <li className="row" key={index} id={index}>
                        <div className="nameTag col">{item}</div>
                        <div className="col-xl-2 actionTags">
                          <i
                            className="bi bi-pencil-fill"
                            onClick={toggleModal}
                          ></i>
                          <i className="bi bi-x-lg"></i>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <TagsEdit
          showModal={showModal}
          handleClose={toggleModal}
          handleEditTags={handleEditTags}
          handleChangeNewTag={handleEditClick}
        />
      )}
    </>
  );
};

export default Tags;
