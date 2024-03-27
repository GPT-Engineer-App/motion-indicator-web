import { useState } from "react";
import { Box, VStack, HStack, Image, Input, Text, Badge } from "@chakra-ui/react";

const Index = () => {
  const [threshold, setThreshold] = useState(50);
  const [motionDetected1, setMotionDetected1] = useState(false);
  const [motionDetected2, setMotionDetected2] = useState(false);

  const handleThresholdChange = (value) => {
    setThreshold(value);
    // TODO: Implement motion detection logic based on the threshold value
    // For demonstration purposes, randomly set motion detected status
    setMotionDetected1(Math.random() < 0.5);
    setMotionDetected2(Math.random() < 0.5);
  };

  return (
    <Box p={4}>
      <VStack spacing={6}>
        <HStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1530151928300-3864d0e5d178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMGZvb3RhZ2V8ZW58MHx8fHwxNzExNTM1OTE2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Camera 1" boxSize="300px" objectFit="cover" />
          <Image src="https://images.unsplash.com/photo-1525939815185-7b25b346d3db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzZWN1cml0eSUyMGNhbWVyYSUyMGZvb3RhZ2V8ZW58MHx8fHwxNzExNTM1OTE2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Camera 2" boxSize="300px" objectFit="cover" />
        </HStack>
        <Box width="300px">
          <Text mb={2}>Threshold:</Text>
          <Input type="number" value={threshold} min={0} max={100} onChange={(e) => handleThresholdChange(parseInt(e.target.value))} placeholder="Enter threshold value (0-100)" />
        </Box>
        <HStack spacing={4}>
          <Badge colorScheme={motionDetected1 ? "red" : "green"} px={4} py={2} borderRadius="md">
            {motionDetected1 ? "Motion Detected" : "No Motion"}
          </Badge>
          <Badge colorScheme={motionDetected2 ? "red" : "green"} px={4} py={2} borderRadius="md">
            {motionDetected2 ? "Motion Detected" : "No Motion"}
          </Badge>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
