import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/halls/countByType");


  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHqGDXDjesKLp8Hs0i3AOVgcOicEqZKcrKrWbszkbbY473Apva6PwupoROkWrJe1ZcJA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlunoHylUo4E2E7E5f_UPGxoJYDbVihy3-lg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_z9WvJczYCe8fW3VfzDckeoTjgHfFU6jtgcymmfgFAF3gKc-K1DnmB_XUHHRnGOwdg5s&usqp=CAU",   
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWvQtNge3Eg_T1aHqdCltqUnmz_NDyPpphwMf2Y9pAgidj-rjZNCQv7fDKDkAXLv67n0&usqp=CAU", 
    "https://images.tribuneindia.com/cms/gall_content/2018/10/2018_10$largeimg28_Sunday_2018_005912011.jpg",  
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"

                />
                <div className="pListTitles">
                  <h1  style={{ color: 'White' }}>{data[i]?.type}</h1>
                  
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;