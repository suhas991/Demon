import React from "react";
import { Card, Image } from "@mantine/core";
import "./Home.css";

export default function Login() {
  return (
    <div className="card-container">
      <div className="card-collect">
        <h1>Who are you ?</h1>
      </div>
      <div className="card-collect">
        <div className="card">
          <Card shadow="sm" p="lg" radius="xl" withBorder>
            <Card.Section component="a" href="https://mantine.dev/">
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={300}
                alt="Norway"
              />
            </Card.Section>
          </Card>
        </div>

        <div className="card">
          <Card shadow="sm" p="lg" radius="xl" withBorder>
            <Card.Section component="a" href="https://mantine.dev/">
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={300}
                alt="Norway"
              />
            </Card.Section>
          </Card>
        </div>
      </div>
    </div>
  );
}
