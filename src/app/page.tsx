import BookmarkTab from '@/components/home/bookmarkTab';
import FormInput from '@/components/home/formInput';

const Home = () => {
    return (
        <section className='flex justify-center items-center min-h-[50vh] flex-col gap-8 w-full md:w-lg mx-auto px-4'>
            <FormInput />
            <BookmarkTab />
        </section>
    );
};

export default Home;
