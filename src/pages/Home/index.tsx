import { Flex, Text, Button } from "@radix-ui/themes";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
    </div>
  );
};

export default Home;
