import "./List.scss"
import Card from "../Card/Card"
const List = () => {
    const data = [
        {
          id: 1,
          img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          img2: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          title: "White T-Shirt",
          isNew: true,
          oldPrice: 18,
          price: 12,
        },
        {
          id: 2,
          img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SmFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          img2: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8SmFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "Jacket Cotton",
          isNew: true,
          oldPrice: 22,
          price: 16,
        },
        {
          id: 3,
          img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          img2: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          title: "Fashion Shirt",
          isNew: true,
          oldPrice: 25,
          price: 22,
        },
        {
          id: 4,
          img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SmFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          img2: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8SmFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "Blazer",
          isNew: true,
          oldPrice: 16,
          price: 12,
        },
      ]
  return (
    <div className='list'>
      {data.map((item) => (
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}


export default List