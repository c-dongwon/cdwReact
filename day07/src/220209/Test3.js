import React from 'react';
import './Test3.css'
import dwStyle from './Test3.module.css'
const Test3 = () => {
    return (
        <div>
            <div className='box'>test</div>
            <div className={dwStyle.box}test></div>
        </div>
    );
};

export default Test3;
/*
    module.css
     - 클래스 이름 중첩 제거하기위해 사용
     - 기존프로젝트 css 클래스 중복되어도 스타일이 꼬이지않게 사용
     import 참조변수 from './파일명.module.css'
     className - {참조변수.클래스명}
*/