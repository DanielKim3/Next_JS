import Header from "../components/Header";
import { useState, useMemo } from "react";


const formatter = Intl.NumberFormat('ko-KR');

//상태 state
export default function order(){    
     //[읽기전용, 쓰기전용] = useState(기본값);
    const [hasEspresso, setEspresso] = useState(false)
    const [hasAmericano, setAmericano] = useState(false)
    const [hasAhera, setAhera] = useState(false);
   
    const handleEspresso = () => setEspresso(!hasEspresso);
    const handleAmericano = () => setAmericano(!hasAmericano);
    const handleAhera = () => setAhera(!hasAhera);

    const sum = useMemo (() => {
        console.log('useMemo 실행')
        let value = 0;
        value += hasEspresso ? 2500 : 0;
        value += hasAmericano ? 3000 : 0;
        value += hasAhera ? 4000 : 0;
        return value;
    },[hasEspresso, hasAmericano, hasAhera])
    
    
    return(
       <div className="container">    
            <Header/>
            <h1 className="font-bold">Order</h1>

            <h2 className="text-xl font-bold">메뉴판</h2>

            <dl>
                <dt>에스프레소</dt>
                <dd>
                    2.500원
                    <small>
                        <button onClick={handleEspresso}>
                            [{hasEspresso ? '선택해제' : '선택'}]
                        </button>
                    </small>
                </dd>
                <dt>아메리카노</dt>
                <dd>
                    3.000원
                    <small>
                        <button onClick={handleAmericano}>
                            [{hasAmericano ? '선택해제' : '선택'}]
                        </button>
                    </small>
                </dd>
                <dt>아이스 헤이즐넛 라뗴</dt>
                <dd>
                    4.000원
                    <small>
                        <button onClick={handleAhera}>
                            [{hasAhera ? '선택 해제' : '선택'}]
                        </button>
                    </small>
                </dd>
            </dl>

            <hr/>

            <h2 className="text-xl font-bold">주문서</h2>

            <ul className="list-unstyled">
                {hasEspresso && <li>에스프레소</li>}
                {hasAmericano && <li>아메리카노</li>}
                {hasAhera && <li>아이스 헤이즐넛 라뗴</li>}
            </ul>

            합계 : {formatter.format(sum)}원       

            <div className="mt-4">
                <button className="btn btn-primary btn-lg" onClick={() => {
                    confirm(`주문 합계는 ${formatter.format(sum)}원입니다. 주문하시겠습니까?`)
                }}>주문하기</button>
            </div>
       </div>
    )
}