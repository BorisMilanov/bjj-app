import React, { useState } from "react";
import { Calendar, Badge, Modal, Input, Button, Select } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

const { Option } = Select;

type Event = {
  date: string;
  type: "success" | "warning" | "error" | "info";
  content: string;
};

const CalendarWithEvents: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      date: "2025-01-10",
      type: "success",
      content: "Team Meeting",
    },
    {
      date: "2025-01-15",
      type: "warning",
      content: "Project Deadline",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState<Event>({
    date: dayjs().format("YYYY-MM-DD"),
    type: "info",
    content: "",
  });

  const getListData = (date: Dayjs): Event[] => {
    return events.filter((event) => event.date === date.format("YYYY-MM-DD"));
  };

  const dateCellRender = (date: Dayjs) => {
    const listData = getListData(date);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setIsModalVisible(false);
    setNewEvent({ date: dayjs().format("YYYY-MM-DD"), type: "info", content: "" });
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-center text-xl font-bold mb-4">Event Calendar</h2>
      <Button
        type="primary"
        onClick={() => setIsModalVisible(true)}
        className="mb-4"
      >
        Add Event
      </Button>
      <Calendar dateCellRender={dateCellRender} />
      <Modal
        title="Add Event"
        visible={isModalVisible}
        onOk={handleAddEvent}
        onCancel={() => setIsModalVisible(false)}
      >
        <Input
          placeholder="Event Content"
          value={newEvent.content}
          onChange={(e) =>
            setNewEvent({ ...newEvent, content: e.target.value })
          }
          className="mb-2"
        />
        <Select
          value={newEvent.type}
          onChange={(value) => setNewEvent({ ...newEvent, type: value })}
          className="mb-2"
        >
          <Option value="success">Success</Option>
          <Option value="warning">Warning</Option>
          <Option value="error">Error</Option>
          <Option value="info">Info</Option>
        </Select>
        <Input
          type="date"
          value={newEvent.date}
          onChange={(e) =>
            setNewEvent({ ...newEvent, date: e.target.value })
          }
        />
      </Modal>
    </div>
  );
};

export default CalendarWithEvents;
