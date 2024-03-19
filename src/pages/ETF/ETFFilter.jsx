import React from "react";
import { Button } from "flowbite-react";

const ETFFilter = () => {
  // Apply horizontal scrolling to the button container
  return (
    <div className="flex flex-nowrap overflow-x-auto gap-2">
      <Button className="text-sm font-light" size="xs" color="blue" pill>
        매우 낮은 위험
      </Button>
      <Button className="text-sm font-light" size="xs" pill>
        낮은 위험
      </Button>
      <Button className="text-sm font-light" size="xs" color="success" pill>
        보통위험
      </Button>
      <Button className="text-sm font-light" size="xs" color="failure" pill>
        매우 높은 위험
      </Button>
      <Button className="text-sm font-light" size="xs" color="warning" pill>
        높은 위험
      </Button>
    </div>
  );
};

export default ETFFilter;
