import Button from '../components/Button/Button';
import classes from './404.module.css';

const Custom404 = () => {
    return (
        <div className={classes.Content}>
            <h1>Ne pare rau.</h1>
            <p>Pagina pe care o cautati nu exista.</p>
            <Button URLLink="/">
                Inapoi acasa!
            </Button>
        </div>
    );
};

export default Custom404;
