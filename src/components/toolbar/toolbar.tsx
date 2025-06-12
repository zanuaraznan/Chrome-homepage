import DateTime from './dateTime';
import ToggleTheme from './toggleTheme';

const Toolbar = () => {
    return (
        <header className='sticky top-0 mb-4 z-9999 p-4 w-full flex items-center justify-between'>
            <DateTime />
            <ToggleTheme />
        </header>
    );
};

export default Toolbar;
