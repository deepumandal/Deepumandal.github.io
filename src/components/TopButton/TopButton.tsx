import React  from "react";
import { Box, Image } from "@chakra-ui/react";


interface TopButtonProps {
    theme: {
        body: string;
        text: string;
    };
}

const TopButton: React.FC<TopButtonProps> = ({ theme }) => {

    function goUpEvent() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function scrollFunction() {
        const topButton = document.getElementById("topButton");
        if (topButton) {
            topButton.style.visibility =
                document.body.scrollTop > 30 || document.documentElement.scrollTop > 30
                    ? "visible"
                    : "hidden";
        }
    }

    window.onscroll = function () {
        scrollFunction();
    };

    // const onMouseEnter = () => {
    //     const topButton = document.getElementById("topButton");
    //     if (topButton) {
    //         topButton.style.color = theme.text;
    //         topButton.style.backgroundColor = theme.body;
    //     }

    //     const arrow = document.getElementById("arrow");
    //     if (arrow) {
    //         arrow.style.color = theme.text;
    //         arrow.style.backgroundColor = theme.body;
    //     }
    // };

    // const onMouseLeave = () => {
    //     const topButton = document.getElementById("topButton");
    //     if (topButton) {
    //         topButton.style.color = theme.body;
    //         topButton.style.backgroundColor = theme.text;
    //     }

    //     const arrow = document.getElementById("arrow");
    //     if (arrow) {
    //         arrow.style.color = theme.body;
    //         arrow.style.backgroundColor = theme.text;
    //     }
    // };


    
    return (
        <Box
            as="div"
            onClick={goUpEvent}
            id="topButton"
            visibility="hidden"
            position="fixed"
            bottom="3.2rem"
            right="1.5rem"
            cursor="pointer"
            padding="15px"
            borderRadius="2rem"
            fontSize="1.5rem"
            color={theme.body}
            backgroundColor={theme.text}
            border={`solid 1px ${theme.text}`}
            title="Go up"
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
        >
            <Image width={"20px"} src={`./images/toparrow.png`} alt="toparrow" />
        </Box>
    );
};

export default TopButton;
