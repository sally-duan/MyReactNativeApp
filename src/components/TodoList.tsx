import React, { useEffect, useCallback, useState } from 'react';
import {
  Divider,
  List,
  Spinner,
  Text,
  TopNavigation,
  Input,
  Button,
} from '@ui-kitten/components';
import {
  createTodo,
  deleteTodo,
  loadTodos,
  updateTodo,
} from '../services/todoService';
import TodoItem from './TodoItem';
import { StyleSheet, View } from 'react-native';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [todos, setTodos] = useState<any[]>([]);
  const [newTitle, setNewTitle] = useState('');

  const refresh = async () => {
    const loaded = await loadTodos();
    setTodos(loaded);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refresh().finally(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    createTodo({ title: newTitle, completed: false })
      .then(() => {
        setNewTitle('');
        onRefresh();
      });
  };

  const handleRemoveTodo = (todo: { id: any }) => {
    deleteTodo(todo.id).then(onRefresh);
  };

  const handleSubmit = (todo: any) => {
    console.log("submitting", todo)
  };
  const handleToggleTodoStatus = (todo: { id: any; completed: boolean }) => {
    updateTodo({ ...todo, completed: !todo.completed }).then(onRefresh);
  };

  return (
    <>
      <TopNavigation title="Sally's shopping list" />
      <Divider />
   
      <TodoForm onFormSubmit={handleSubmit} />
      {/* Add‑todo form */}
      <View style={styles.formRow}>
        <Input
          placeholder="New todo title"
          value={newTitle}
          onChangeText={setNewTitle}
          style={styles.input}
        />
        <Button onPress={handleAdd} style={styles.addButton}>
          Add
        </Button>
      </View>
      <Divider />

      <Text style={styles.header}>This is my todo list</Text>
      <Divider />

      {refreshing ? (
        <Spinner />
      ) : todos.length > 0 ? (
        <List
          data={todos}
         ItemSeparatorComponent={Divider}
          renderItem={({ item }) => TodoItem (item, handleRemoveTodo, handleToggleTodoStatus) }       
      
        />
      ) : (
        <Text category="s1" style={styles.emptyText}>
          No todos found
        </Text>
      )}
    </>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  formRow: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
  addButton: {
    flexShrink: 0,
  },
  header: {
    margin: 8,
    fontSize: 16,
  },
  emptyText: {
    margin: 16,
    textAlign: 'center',
  },
});
