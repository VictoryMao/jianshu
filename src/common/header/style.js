import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
   position:relative;
   height:58px;
   border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position:absolute;
    top:0;
    left:0;
    width:100px;
    height:100%;
    background:#f00;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div`
   width:960px;
   height:100%;
   margin:0 auto;
`;

export const NavItem = styled.div`
   line-height: 56px;
   padding: 0 15px;
   font-size:17px;
   color:#333;
   &.left{
      float: left;
   }
   &.right{
      float: right;
      color: #969696;
   }
   &.active{
      color:#ea6f5a;
   }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
   box-sizing:border-box;
   width:160px;
   height:38px;
   margin-top:9px;
   padding:0 20px;
   border:none;
   outline: none;
   border-radius:20px;
`;