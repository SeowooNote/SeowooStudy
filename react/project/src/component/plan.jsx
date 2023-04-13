import React from "react";
import './plan.css';
import styled from "styled-components";

// 내부로 컴포넌트 생성
// yarn add styled-components

// 내부에서 컴포넌트 생성 및 스타일을 내부에서 선언
const PlanItem = styled.div`
    float: left;
    margin: 15px 0px;
    width: 550px;
    height: 260px;
    border: 1px solid lightslategray;
    cursor: pointer;
    transition: all 0.5s;
&:hover{
    border: 1px solid black;
}
&>img{
    width: 100%;
}
&>h4{
    margin-top: 15px;
    font-size: 16px;
    font-weight: 400;
}
&>p{
    margin-top: 5px;
    font-size: 13px;
    font-weight: 300;
}
`

function Plan(){
    const items = [
        {
            id: 1,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2023/202304/6c205439-e307-4d42-abb8-f099a5617735.png',
            title: '루카스나인 리저브 드립스틱 신제품 출시',
            text: '2023.04.04 ~ 2023.05.31'
        },
        {
            id: 2,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2023/202303/878ff32d-9aba-4474-add8-5ec207d9c8f7.png',
            title: '봄격 특가 ON, 외출 간식 골라담기!',
            text: '2023.03.28 ~ 2023.04.16'
        },
        {
            id: 3,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2023/202302/7a666558-7a70-499d-9b5d-403d548aa6c4.png',
            title: '분유에 진심을 영양에 과학을_남양 분유 기획전',
            text: '2023.02.07 ~ 2023.06.30'
        },
        {
            id: 4,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2023/202301/f51165d8-6e0e-4463-bdaa-da6fa933a895.png',
            title: '테이크핏 케어, 9가지 필수 아미노산이 모두 함유된 완전 단백질 플랜',
            text: '2023.01.30 ~ 2023.06.30'
        },
        {
            id: 5,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202211/3d8bd170-f24b-42f7-958f-eee11cfe77f1.png',
            title: '우리아이 성장의 KEY를 찾다 키플러스 (성장기어린이/청소년)',
            text: '2022.11.02 ~ 2023.06.30'
        },
        {
            id: 6,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202211/f95274ad-2da6-4172-8f6e-53bbeb1f6e5b.png',
            title: '국내산 천마로 더 진하고 든든한 천마차(단호박/콘플레이크)',
            text: '2022.11.02 ~ 2023.06.30'
        },
        {
            id: 7,
            src: 'https://shoppingcdn.namyangi.com/attach/item/2022/202210/c8853528-4bbf-47c2-85d4-2a0463b31fca.png',
            title: '든든한 하루의 시작 아몬드데이 (오리지널/언스위트)',
            text: '2022.11.02 ~ 2023.06.30'
        }
    ]

    return(
        <>
            <div className="mainImg"><img src="https://shoppingcdn.namyangi.com/attach/site/2023/202303/370c29c3-0eb4-4920-87a6-dbd3b3dc2114.png" alt="mainImg" /></div>
            <div className="contents">
                <div className="contents_h">
                    <h3>남양 기획전</h3>
                    <span>총 7건의 기획전이 있습니다.</span>
                </div>
                <div className="contents_area">
                    {items.map((item)=>(
                        <PlanItem item={item}>
                            <img src={item.src} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </PlanItem>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Plan;