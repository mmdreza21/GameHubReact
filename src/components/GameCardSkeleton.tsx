import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

export function GameCartSkeleton() {
  return (
    <Card.Root>
      <Skeleton height={"180px"}></Skeleton>
      <Card.Body>
        <SkeletonText></SkeletonText>
      </Card.Body>
    </Card.Root>
  );
}
