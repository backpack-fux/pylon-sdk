import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

interface AccountCardProps {
  title: string;
  amount: number;
  description: string;
  color?: string;
  isLoading: boolean;
  actions?: Array<{
    label: string;
    onClick: () => void;
    color: string;
  }>;
}

export function AccountCard({ 
  title, 
  amount, 
  description, 
  isLoading, 
  actions 
}: AccountCardProps) {
  return (
    <Card className="bg-charyo-500/60">
      <CardBody>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-small text-default-500">{description}</p>
        <h4 className="text-2xl font-bold my-2">
          {isLoading ? "Loading..." : `$${amount.toFixed(2)}`}
        </h4>
        {actions && (
          <div className="flex gap-2 mt-4">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant="flat"
                size="sm"
                onPress={action.onClick}
                className={`w-full bg-charyo-200 text-notpurple-500`}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
}