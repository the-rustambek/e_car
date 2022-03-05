import * as React from 'react';
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import "../BuyHeader/BuyHeader.css"
const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  
  max-width:250px;
  background: ${theme.palette.mode === 'transparent' ? "red" : 'transparent'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border:none;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === '#333' ? "#333" : "#333"};
  font-weight: 300;


  &:hover {
    color:#008DCB;
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === '#7DC1E0' ? "#7DC1E0": "#7DC1E0"};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px 8px;
  margin: 10px 0;
  max-width:160px;
  background: ${theme.palette.mode === 'transparent' ? "transparent" : 'transparent'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border:none;
  color: ${theme.palette.mode === 'black' ? "black" : "black"};
  overflow: auto;
  outline: 0px;
  background: white;
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border:none;
  cursor: default;

  &:last-of-type {
    border:none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'transparent' ? 
    'transparent' : 'transparent'};
    color: ${theme.palette.mode === 'dark' ? "black" : "black"};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'transparent' ? 'transparent' : 'transparent'};
    color: ${theme.palette.mode === 'dark' ? "black" : "black"};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'transparent' ? 'transparent' : 'transparent'};
    color: ${theme.palette.mode === 'dark' ? "black" : "black"};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'transparent' ? 'transparent' : 'transparent'};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

function CustomSelect(props) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
}

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType,
  }),
};

function renderValue(option) {
  if (option == null) {
    return <span>We Buy Evs</span>;
  }

  return (
    <span>
      {option.label} ({option.value})
    </span>
  );
}

export default function BuyUnstyledSelectCustomRenderValue() {
  return (
    <CustomSelect className="navs-drop"
     renderValue={renderValue}>
      <StyledOption className='navs-option' value={10}>We buy Teslas</StyledOption>
      <StyledOption className='navs-option' value={20}>We buy Maches</StyledOption>
      <StyledOption className='navs-option' value={30}>We buy Rivians</StyledOption>
    </CustomSelect>
  );
}
