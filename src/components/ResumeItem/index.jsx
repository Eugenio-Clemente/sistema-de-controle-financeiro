import * as C from "./styles"
import PropTypes from "prop-types"

const ResumeItem = ({title, Icon, value}) => {
    return (
       <C.Container>
        <C.Header>
           <C.HeaderTitle>{title}</C.HeaderTitle>
           <Icon/>
        </C.Header>
        <C.Total>{value}</C.Total>
       </C.Container>
    )
}

ResumeItem.propTypes = { 
   title: PropTypes.string,
   Icon: PropTypes.func,
   value: PropTypes.node
}

export { ResumeItem } 
