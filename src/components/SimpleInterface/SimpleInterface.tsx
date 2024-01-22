import { Box } from "@mui/system";

const container = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
};

const content = {
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const SimpleInterface: React.FC = () => {
    return (
        <Box sx={container}>
            <Box sx={content}>
                {new Date().toString()}
            </Box>
        </Box>);
};

export default SimpleInterface;
