import React from "react";
import './product.css';

function Item({product}){
    return(
        <div className="p_item">
            <img src={product.src} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            <span style={{display : product.act? "block" : "none"}}> &#42; 냉장</span>
        </div>
    )
}

function Product(){
    const products = [
        {
            id: 1,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202203/40ecdf28-85fc-4d3a-b831-6e21bb4aee0c.jpg?90b3052',
            title: '[냉장]맛있는 우유 GT 슈퍼밀크 900mL',
            price: '2,980원',
            act: true
        },
        {
            id: 2,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202203/8ab07b7b-97ec-4663-9aa0-b26a0b4171b1.jpg?90b3052',
            title: '[냉장]맛있는 우유 GT 소화 잘되는 배 안아픈 우유 900mL',
            price: '3,250원',
            act: true
        },
        {
            id: 3,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202203/9b0fa8f2-05c0-4f3b-9e9f-7171b27805d2.jpg?90b3052',
            title: '[냉장]맛있는 우유 GT 깔끔한 저지방 2.3L',
            price: '6,200원',
            act: true
        },
        {
            id: 4,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202203/470ee65b-4c87-45a3-85dd-9bcee652585a.jpg?90b3052',
            title: '[냉장]맛있는 우유 GT 1.8L',
            price: '5,050원',
            act: true
        },
        {
            id: 5,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202212/068ce5d3-a68c-48f0-ad13-e13e616b964d.jpg?90b3052',
            title: '[냉장]떠먹는 불가리스 복숭아 85g * 4입',
            price: '3,000원',
            act: true
        },
        {
            id: 6,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202212/b9219ff1-c0fe-456f-93be-f4361a4d105b.jpg?90b3052',
            title: '[냉장]떠먹는 불가리스 딸기 85g * 4입',
            price: '3,000원',
            act: true
        },
        {
            id: 7,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202211/e9520296-80fd-4e13-96f0-f957df5ee254.jpg?90b3052',
            title: '[냉장]또떠블 하트초코 125g',
            price: '1,400원',
            act: true
        },
        {
            id: 8,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202211/847242a9-329b-4b5c-869d-b3a51d294a2f.jpg?90b3052',
            title: '[냉장]또떠블 눈꽃초코 & 그래놀라 125g',
            price: '1,400원',
            act: true
        },
        {
            id: 9,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2021/202105/68f7f57e-4ff6-4b5d-bcc4-333e12563d27.jpg?90b3052',
            title: '[냉장]100% 무첨가 불가리스 생요거트 435g',
            price: '2,800원',
            act: true
        },
        {
            id: 10,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/51b722f8-1867-4e23-904c-bd0fc06af0ca.jpg?90b3052',
            title: '[냉장]이너케어 간 프로텍트 130mL * 4입',
            price: '8,980원',
            act: true
        },
        {
            id: 11,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/1c130e90-7a70-4304-9c20-ac5d964e18d5.jpg?90b3052',
            title: '[냉장]이너케어 위 프로텍트 130mL * 4입',
            price: '8,980원',
            act: true
        },
        {
            id: 12,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202201/14185f33-4482-4a13-9e22-0eb32e9dcdcf.jpg?90b3052',
            title: '[냉장]이너케어 장 프로텍트 130mL * 4입',
            price: '8,980원',
            act: true
        },
        {
            id: 13,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202211/59cedff9-760d-4d12-83fb-ddc92c0ba0bf.jpg?90b3052',
            title: '[냉장]자연의 시작 불가리스 사과 150mL * 4입',
            price: '4,980원',
            act: true
        },
        {
            id: 14,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202211/4683554c-9799-4c49-96ae-142744655db9.jpg?90b3052',
            title: '[냉장]자연의 시작 불가리스 플레인 150mL * 4입',
            price: '4,980원',
            act: true
        },
        {
            id: 15,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202211/df0b4a73-ff75-4bbe-86e2-1b0947ef4567.jpg?90b3052',
            title: '[냉장]위쎈 오리지날 150mL * 4입',
            price: '4,000원',
            act: true
            // 할인
        },
        {
            id: 16,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202207/a58d1b7f-fbe9-4045-b24e-9707347f5feb.jpg?90b3052',
            title: '[냉장]위쎈 샤인머스켓 150mL * 4입',
            price: '4,200원',
            act: true
            // 할인
        },
        {
            id: 17,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202203/b018a2f2-2ff8-417f-b496-6bdd48cac92f.jpg?90b3052',
            title: '[냉장]이오 80mL * 5입',
            price: '2,500원',
            act: true
        },
        {
            id: 18,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2020/202012/d4be4d72-1de4-4e9d-9026-f3d34e936145.jpg?90b3052',
            title: '[냉장]남양 요구르트 65mL * 20입',
            price: '2,500원',
            act: true
        },
        {
            id: 19,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2021/202105/f5de6d39-44a8-4976-a739-8b5c87a9d229.jpg?90b3052',
            title: '[냉장]드빈치 뼈가 튼튼 고칼슘 치즈 270g * 2입',
            price: '10,000원',
            act: true
        },
        {
            id: 20,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2021/202105/1637a076-d1be-46c8-833f-e3844cab6dc3.jpg?90b3052',
            title: '[냉장]4가지 치즈의 황금비율 콰트로 치즈 170g * 2입',
            price: '14,000원',
            act: true
        }
    ]

    return(
        <>
            <div className="mainImg">mainImg</div>
            <div className="contents">
                <div className="contents_h"><h3>Product</h3></div>
                <div className="contents_area">
                    {products.map((product)=>(
                        <Item product={product}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Product;