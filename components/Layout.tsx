import Menu from './Menu';
const layoutStyle = {
  margin: 20,
  padding: 20,
};
const Layout = props => (
  <div style={layoutStyle}>
    <Menu />
    {props.children}
  </div>
);
export default Layout;