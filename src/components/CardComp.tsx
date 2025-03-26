import styled from 'styled-components'
import { pxToRem } from '@/utils'

export const CardComp = styled.div`
  background-color: ${(props) => props.theme.card.background};
  border: ${pxToRem(1)} solid ${(props) => props.theme.card.border};
  border-radius: ${pxToRem(1)};
  box-sizing: border-box;
  padding: ${pxToRem(24)};
  width: 100%;
  &.alert{
    background-color: ${(props) => props.theme.card.alert};
    border-color: ${pxToRem(1)} solid ${(props) => props.theme.card.border};
     &.alert{
    background-color: ${(props) => props.theme.card.success};
    border-color: ${pxToRem(1)} solid ${(props) => props.theme.card.success};
    &.warning {
    background-color: ${(props) => props.theme.card.warning};
    border-color: ${pxToRem(1)} solid ${(props) => props.theme.card.warning};
}
    a{ 
    color: inherit;
    text-decoration: none;
    }
`
