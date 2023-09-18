import { ResumeItem } from "../ResumeItem"
import * as C from "./sytles"
import PropTypes from "prop-types"

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({income, expense, total}) => {
    return (
     <C.Container>
      <ResumeItem
         title="Entradas"
         Icon={FaRegArrowAltCircleUp}
         value={income}
            />
      <ResumeItem
         title="Saídas"
         Icon={FaRegArrowAltCircleDown}
         value={expense}
            />
       <ResumeItem
           title="Total" 
           Icon={FaDollarSign}
           value={total}
            />
      </C.Container>
    )
}

Resume.propTypes = { 
    income: PropTypes.node,
    expense: PropTypes.node,
    total: PropTypes.node
 }

export { Resume }
