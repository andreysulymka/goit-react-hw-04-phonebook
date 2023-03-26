import PropTypes from 'prop-types';
import { Label, FilterInput } from './Flter.styled';

export function Filter({value, onChange}){
    return (
        <form action="">
            <Label htmlFor="">Find contacts by name
                <FilterInput type="text" value={ value} onChange={onChange} />
            </Label>
        </form>
    
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};