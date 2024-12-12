const RestaurantCategory = ({data}) => {
    console.log('data :>> ', data);
    return(
        <div>
            {/* Header */}
            <div className="flex justify-between shadow-lg bg-gray-100 p-4 my-4">
                <span className="font-black">{data.title} ({data.itemCards.length})</span>
                <span>{"⬇"}</span>
            </div>
            {/* accordion body */}
        </div>
    )

}
export default RestaurantCategory;