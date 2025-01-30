import { describe, it, expect } from 'vitest';
import { register } from './register';

describe('register function', () => {
  it('should register a new user', () => {
    const users = [];
    const newUser = { email: 'test@example.com', name: 'Test User' };
    
    const result = register(users, newUser);

    expect(result).toHaveProperty('id');
    expect(result.email).toBe(newUser.email);
    expect(users).toContainEqual(result);
  });

  it('should throw an error if the user already exists', () => {
    const users = [{ id: 1, email: 'test@example.com', name: 'Test User' }];
    const newUser = { email: 'test@example.com', name: 'Test User 2' };

    expect(() => register(users, newUser)).toThrow('User already exists');
  });
});

// Este teste verifica a funcionalidade da função `register`, responsável por registrar novos usuários.
// 
// O primeiro caso de teste (`should register a new user`) garante que um novo usuário seja corretamente 
// adicionado à lista, recebendo um ID e mantendo os dados fornecidos.
//
// O segundo caso de teste (`should throw an error if the user already exists`) verifica se a função 
// lança um erro ao tentar registrar um usuário que já possui o mesmo e-mail na lista existente.
