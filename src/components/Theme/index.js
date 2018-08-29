// @flow
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '../../constants/application';


type Props = {
  theme: Object,
  children: any,
}

class Theme extends React.Component<Props>{
  static defaultProps= {
      theme: {}
  };

  checkDefaultTheme = ()=>{
    const {theme} = this.props;
    if(Object.keys(theme).length === 0 && theme.constructor === Object) return true;
    return false;
  }

  render(){
    const {
      children,
      theme
    } = this.props;
    return (
      <ThemeProvider theme={this.checkDefaultTheme() ? themeDefault.palette : theme}>  
        {children}
      </ThemeProvider>
    )
  }
}

export default Theme;
