import React ,{Component} from 'react';
import styled from 'styled-components';
import {BasicButton} from './ButtonTypes'

type Props = {
    children : any
}

const defaultProps = {
    disabled: false,
    size: 'default',
  };

class Button extends Component<Props>{
    static defaultProps = defaultProps;
    getTemplate = () =>{    
        return this.props.getTemplate()
    }
    render(){
        const {
            children,
            icon
        } = this.props;
        return(
            <BasicButton {...this.props}>
                {
                    this.props.getTemplate ? (this.getTemplate()) : ('')
                }
                {children}
            </BasicButton>
        )
    }
}

export default Button;