import { Modal as RNModal, Pressable, View, type ModalProps as RNModalProps } from "react-native";
import type { ReactNode } from "react";
import { Text } from "./Text";

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  className?: string;
}

/** Centered modal — dimmed backdrop + surface panel + close button. */
export function Modal({ visible, onClose, title, children, className }: ModalProps) {
  return (
    <RNModal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable
        onPress={onClose}
        className="flex-1 items-center justify-center bg-black/60 p-4"
      >
        {/* stop propagation: pressing the panel shouldn't close */}
        <Pressable
          onPress={() => {}}
          className={`w-full max-w-lg rounded-2xl border border-border-glow bg-surface p-5 ${className ?? ""}`}
        >
          <View className="mb-3 flex-row items-center justify-between">
            {title ? <Text variant="title">{title}</Text> : <View />}
            <Pressable
              accessibilityRole="button"
              onPress={onClose}
              className="h-8 w-8 items-center justify-center rounded-lg active:bg-surface-elevated"
            >
              <Text variant="title" className="text-text-muted">×</Text>
            </Pressable>
          </View>
          {children}
        </Pressable>
      </Pressable>
    </RNModal>
  );
}
