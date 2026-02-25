import React from "react";
import { Text, View, type TextProps, type ViewProps } from "react-native";

export interface CardProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

function CardRoot({ children, className, ...rest }: CardProps) {
  return (
    <View
      className={`rounded-2xl border border-cream-200 bg-cream-100 p-5 dark:border-night-600 dark:bg-night-700 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </View>
  );
}

function CardHeader({
  children,
  className,
  ...rest
}: ViewProps & { className?: string }) {
  return (
    <View className={`flex-row items-center ${className ?? ""}`} {...rest}>
      {children}
    </View>
  );
}

function CardIcon({
  children,
  className,
  ...rest
}: ViewProps & { className?: string }) {
  return (
    <View
      className={`mr-3 rounded-full bg-secondary-100 p-2 dark:bg-night-600 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </View>
  );
}

function CardEyebrow({
  children,
  className,
  ...rest
}: TextProps & { className?: string }) {
  return (
    <Text
      className={`text-sm font-semibold uppercase tracking-widest text-cream-600 dark:text-night-200 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

function CardTitle({
  children,
  className,
  ...rest
}: TextProps & { className?: string }) {
  return (
    <Text
      className={`mt-3 text-xl font-semibold text-cream-900 dark:text-night-50 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

function CardDescription({
  children,
  className,
  ...rest
}: TextProps & { className?: string }) {
  return (
    <Text
      className={`mt-2 text-sm leading-6 text-cream-700 dark:text-night-200 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Text>
  );
}

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Icon: CardIcon,
  Eyebrow: CardEyebrow,
  Title: CardTitle,
  Description: CardDescription,
});
