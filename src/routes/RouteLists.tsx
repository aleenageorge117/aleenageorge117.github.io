import { Route, Routes, Navigate} from 'react-router-dom';

// COMPONENTS
import Home from '../containers/Home/Home';
import Interests from '../containers/Interests/Interests';
import Work from '../containers/Work/Work';

const RouteLists = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}

export default RouteLists;
