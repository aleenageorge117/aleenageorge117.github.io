import { Route, Routes, Navigate} from 'react-router-dom';

// COMPONENTS
import Home from '../containers/Home/Home';
import Resume from '../containers/Resume/Resume';
import Work from '../containers/Work/Work';

const RouteLists = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}

export default RouteLists;
