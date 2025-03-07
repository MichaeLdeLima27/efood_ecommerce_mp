import styled, { css, keyframes } from 'styled-components'
import { Colors, breakpoints } from '../../styles'

type AnimatedProps = {
  animate?: boolean
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const itemRemove = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.95);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
    height: 0;
    margin: 0;
    padding: 0;
  }
`

export const CartContainer = styled.div<AnimatedProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 980;
  visibility: ${({ animate }) => (animate ? 'visible' : 'hidden')};
  transition: visibility 0.3s ease;
`

export const CartOverlay = styled.div<AnimatedProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: ${({ animate }) => (animate ? fadeIn : fadeOut)} 0.3s ease forwards;
`

export const CartContent = styled.div<AnimatedProps>`
  background-color: ${Colors.mainPink};
  width: 360px;
  padding: 32px 8px;
  z-index: 1;
  overflow-y: auto;
  position: relative;
  animation: ${({ animate }) => (animate ? slideIn : slideOut)} 0.3s ease
    forwards;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`

export const CartItem = styled.div<{ removing?: boolean }>`
  background-color: ${Colors.lightPink};
  padding: 8px;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${Colors.mainPink};
  transition: all 0.3s ease;
  animation: ${({ removing }) =>
    removing &&
    css`
      ${itemRemove} 0.5s ease forwards
    `};
`

export const CartItemContent = styled.div`
  display: flex;
  background-color: ${Colors.lightPink};
  color: ${Colors.mainPink};

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`

export const ItemInfo = styled.div`
  flex: 1;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`

export const ItemTitle = styled.h3`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`

export const ItemPrice = styled.p`
  font-size: 14px;
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 16px;
    height: 16px;
  }
`

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  margin: 40px 8px 8px;
  color: ${Colors.lightPink};
`

export const CheckoutButton = styled.button`
  background-color: ${Colors.lightPink};
  color: ${Colors.mainPink};
  border: none;
  width: 100%;
  padding: 4px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
  font-size: 14px;
  height: 24px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${Colors.white};
  }
`

export const EmptyCart = styled.p`
  color: ${Colors.lightPink};
  text-align: center;
  margin-top: 24px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 16px;
    height: 16px;
  }
`
