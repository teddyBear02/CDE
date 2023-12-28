import { useState, useEffect } from "react";
import SubNav from "../../SubNav";
import NoTags from "./NoTags";
import TagsEdit from "./TagsEdit";
import TagsDelete from "./TagsDelete";

interface Tag {
  id: number;
  TagName: string;
}

let Tags = () => {
  let token = localStorage.getItem("userData"); // Lấy Token Login từ Local Storage

  const [showModal, setShowModal] = useState(false);

  let [showModalDelete, setshowModalDelete] = useState(false);

  const [tags, setTags] = useState<Tag[]>([]); // Lưu thông tin nhiều tag : [{}]

  const [inforTag, setinforTag] = useState({}); // Lưu thông tin metadata của 1 tag : {}

  const [selectedItemId, setSelectedItemId] = useState<string>("");

  const toggleModal = (e: React.MouseEvent<HTMLElement>) => {
    setShowModal(!showModal);
    let tagId = (e.currentTarget.closest(".row") as HTMLElement)?.id;
    setSelectedItemId(tagId);
  };

  const toggleModalDelete = (e: React.MouseEvent<HTMLElement>) => {
    setshowModalDelete(!showModalDelete);
    let tagId = (e.currentTarget.closest(".row") as HTMLElement)?.id;
    setSelectedItemId(tagId);
  };

  //......................... xử lý post 1 tag mới................................//

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setinforTag({ ...inforTag, [name]: value });
  };

  const handleAdd = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/tag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(inforTag),
      });

      if (response.ok) {
        const data = await response.json();
        let dataTag = data.metadata;
        console.log("Add new tag successful:", data);
        setTags((prev: any) => [...prev, dataTag]);
      } else {
        const errorData = await response.json();
        console.error("Add new tag failed:", errorData);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  useEffect(() => {
    // useEffect này sẽ chạy mỗi khi tags thay đổi
    console.log("Tag names changed:", tags);
  }, [tags]);

  //..............................................................................//

  //............................. xử lý Update 1 tag..............................//

  const [selectedTag, setSelectedTag] = useState({
    TagName: "",
  });

  const handleEditClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedTag({ ...selectedTag, [name]: value });
  };

  const handleEditTags = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/tag/${selectedItemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(selectedTag), // Chuyển đổi dữ liệu thành chuỗi JSON
        }
      );

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

  const handleDeleteTags = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/tag/${selectedItemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(selectedTag), // Chuyển đổi dữ liệu thành chuỗi JSON
        }
      );

      if (!response.ok) {
        throw new Error("Không thành công");
      }
      // Xử lý dữ liệu phản hồi (nếu cần)
      const responseData = await response.json();
      console.log("Dữ liệu phản hồi:", responseData);

      const indexToRemove = tags.findIndex(
        (item) => item.id === parseInt(selectedItemId)
      );

      if (indexToRemove !== -1) {
        tags.splice(indexToRemove, 1);
        showModalDelete = false;
      }
    } catch (error) {
      console.error("Lỗi khi thực hiện yêu cầu PUT:", error);
    }
  };
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
                {tags.length === 0 ? (
                  <NoTags />
                ) : (
                  <ul className="listTags">
                    {tags.map((item) => (
                      <li className="row" key={item.id} id={`${item.id}`}>
                        <div className="nameTag col">{item.TagName}</div>
                        <div className="col-xl-2 actionTags">
                          <i
                            className="bi bi-pencil-fill"
                            onClick={toggleModal}
                          ></i>
                          <i
                            className="bi bi-x-lg"
                            onClick={toggleModalDelete}
                          ></i>
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

      {showModalDelete && (
        <TagsDelete
          showModal={showModalDelete}
          handleClose={toggleModalDelete}
          handleEditTags={handleDeleteTags}
        />
      )}
    </>
  );
};

export default Tags;
