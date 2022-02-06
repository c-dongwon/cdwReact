import React from 'react';
import './Test3.css'
import myStyle from './Test3.module.css'

const Test3 = () => {
    return (
        <div>
            <div className='box'>test</div>
            <div className={myStyle.box}>test</div>
        </div>
    );
};

export default Test3;

/*
    파일명.css => 컴포넌트단위로 재사용 주로 class명으로 작성한다
                  1.전체 스타일 작성 
                  2.컴포넌트별로 css(scss) 별도로 작성한다
                  3.클래스이름에 중첩을 제거하기위해서 - module.css(scss) 
                  4.컴포넌트별로 module.css(scss) 별도로 작성한다
    module.css(scss)
        - 클래스이름의 중첩을 제거하기위해 사용
        - 기존프로젝트의 css 클래스명과 중복되어도 스타일이 꼬이지 않게 하기위해서 사용
          파일명.module.css
          import 참조변수 from './파일명.module.css'

          className = {참조변수.클래스명}
          결과 - f12 -> 태그형식 : 파일명_클래스명__아무말
*/