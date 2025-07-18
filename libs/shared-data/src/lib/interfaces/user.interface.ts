/**
 * @fileoverview Interface para usuários
 *
 * Define a estrutura de dados dos usuários da aplicação,
 * incluindo informações pessoais, preferências e configurações.
 *
 * @author Jornada 30 Dias
 * @version 1.0.0
 * @since 2025-07-17
 */

/**
 * Interface base para usuários
 */
export interface User {
  /** ID único do usuário */
  id: string;

  /** Nome completo do usuário */
  name: string;

  /** Email do usuário */
  email: string;

  /** Nome de usuário (username) */
  username: string;

  /** URL do avatar do usuário */
  avatar?: string;

  /** Data de criação da conta */
  createdAt: Date;

  /** Data da última atualização */
  updatedAt: Date;

  /** Status do usuário */
  status: 'active' | 'inactive' | 'pending' | 'suspended';

  /** Se o email foi verificado */
  emailVerified: boolean;

  /** Perfil do usuário */
  profile?: UserProfile;

  /** Configurações do usuário */
  settings?: UserSettings;

  /** Roles/permissões do usuário */
  roles: string[];
}

/**
 * Informações de perfil do usuário
 */
export interface UserProfile {
  /** Biografia/descrição */
  bio?: string;

  /** Data de nascimento */
  birthDate?: Date;

  /** Telefone */
  phone?: string;

  /** Endereço */
  address?: UserAddress;

  /** Links para redes sociais */
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };

  /** Preferências profissionais */
  professional?: {
    company?: string;
    position?: string;
    experience?: 'junior' | 'mid' | 'senior' | 'lead';
    skills?: string[];
  };
}

/**
 * Endereço do usuário
 */
export interface UserAddress {
  /** Rua */
  street: string;

  /** Número */
  number: string;

  /** Complemento */
  complement?: string;

  /** Bairro */
  neighborhood: string;

  /** Cidade */
  city: string;

  /** Estado */
  state: string;

  /** CEP */
  zipCode: string;

  /** País */
  country: string;
}

/**
 * Configurações do usuário
 */
export interface UserSettings {
  /** Configurações de notificação */
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
    marketing: boolean;
  };

  /** Configurações de privacidade */
  privacy: {
    profileVisible: boolean;
    showEmail: boolean;
    showPhone: boolean;
  };

  /** Configurações de aparência */
  appearance: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    timezone: string;
  };

  /** Configurações de segurança */
  security: {
    twoFactorEnabled: boolean;
    loginNotifications: boolean;
  };
}

/**
 * DTO para criação de usuário
 */
export interface CreateUserDto {
  /** Nome completo */
  name: string;

  /** Email */
  email: string;

  /** Nome de usuário */
  username: string;

  /** Senha */
  password: string;

  /** Confirmação de senha */
  confirmPassword: string;

  /** Aceita termos de uso */
  acceptTerms: boolean;
}

/**
 * DTO para atualização de usuário
 */
export interface UpdateUserDto {
  /** Nome completo */
  name?: string;

  /** Avatar */
  avatar?: string;

  /** Perfil */
  profile?: Partial<UserProfile>;

  /** Configurações */
  settings?: Partial<UserSettings>;
}

/**
 * DTO para login
 */
export interface LoginDto {
  /** Email ou username */
  identifier: string;

  /** Senha */
  password: string;

  /** Lembrar login */
  rememberMe?: boolean;
}

/**
 * Resposta do login
 */
export interface LoginResponse {
  /** Token de acesso */
  accessToken: string;

  /** Token de refresh */
  refreshToken: string;

  /** Informações do usuário */
  user: User;

  /** Tempo de expiração do token */
  expiresIn: number;
}
