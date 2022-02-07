import * as React from 'react';
import Switch from '@mui/material/Switch';
//머튜리얼 활용
//https://mui.com/
//function 이름만 바꿔주기
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Test2() {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
}