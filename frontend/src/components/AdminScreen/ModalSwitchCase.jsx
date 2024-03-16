
import FrontBentoGrid1 from '../FrontGridComps/FrontBentoGrid1';
import FrontBentoGrid2 from '../FrontGridComps/FrontBentoGrid2';
import FrontBentoGrid3 from '../FrontGridComps/FrontBentoGrid3';
import FrontBentoGrid4 from '../FrontGridComps/FrontBentoGrid4';

const ModalSwitchCase = ({ value }) => {
    switch (value) {
        case 1:
            return <FrontBentoGrid1/>
        case 2:
            return <FrontBentoGrid2/>;
        case 3:
            return <FrontBentoGrid3/>;
        case 4:
            return <FrontBentoGrid4/>;
        default:
            return <div>This is the default text</div>;
    }
};

export default ModalSwitchCase