import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "sbt",
  description: "Build tool for Scala and Java",
  subcommands: [
    {
      name: "clean",
      description:
        "Deletes files produced by the build, such as generated sources, compiled classes, and task caches",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'abc my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for sbt",
    },
    {
      name: ["--verbose", "-v"],
      description: "Enable verbose mode",
    },
    {
      name: ["--version", "-V"],
      description: "Print sbt version information",
    },
    {
      name: "--numeric-version",
      description: "Print the numeric sbt version (sbt sbtVersion",
    },
    {
      name: "--script-version",
      description: "Print the version of sbt script",
    },
    {
      name: ["--debug", "-d"],
      description: "Set sbt log level to debug",
    },
    {
      name: ["-debug-inc", "--debug-inc"],
      description: "Enable extra debugging for the incremental debugger",
    },
    {
      name: "--no-colors",
      description: "Disable ANSI color codes",
    },
    {
      name: "--color",
      description: "Enable or disable ANSI color codes (sbt 1.3 and above)",
      args: {
        name: "color",
        suggestions: ["auto", "always", "true", "false", "never"],
      },
    },
    {
      name: "--supershell",
      description: "Enable or disable supershell (sbt 1.3 and above)",
      args: {
        name: "option",
        suggestions: ["auto", "always", "true", "false", "never"],
      },
    },
    {
      name: "--traces",
      description:
        "Generate Trace Event report on shutdown (sbt 1.3 and above)",
    },
    {
      name: "--timings",
      description: "Display task timings report on shutdown",
    },
    {
      name: "--sbt-create",
      description:
        "Start sbt even if current directory contains no sbt project",
    },
    {
      name: "--sbt-dir",
      description:
        "Path to global settings/plugins directory (default: ~/.sbt)",
      args: {
        name: "folder",
        template: "folders",
        default: "~/.sbt",
      },
    },
    {
      name: "--sbt-boot",
      description:
        "Path to shared boot directory (default: ~/.sbt/boot in 0.11 series)",
      args: {
        name: "folder",
        template: "folders",
        default: "~/.sbt/boot",
      },
    },
    {
      name: "--ivy",
      description: "Path to local Ivy repository (default: ~/.ivy2)",
      args: {
        name: "folder",
        template: "folders",
        default: "~/.ivy2",
      },
    },
    {
      name: "--mem",
      description: "Set memory options (default: 1024)",
      args: {
        name: "mem",
        default: "1024",
      },
    },
    {
      name: "--no-share",
      description: "Use all local caches; no sharing",
    },
    {
      name: "--no-global",
      description:
        "Uses global caches, but does not use global ~/.sbt directory",
    },
    {
      name: "--jvm-debug",
      description: "Turn on JVM debugging, open at the given port",
      args: {
        name: "port",
      },
    },
    {
      name: "--batch",
      description: "Disable interactive mode",
    },
    {
      name: "--sbt-version",
      description: "Use the specified version of sbt",
      args: {
        name: "sbt version",
      },
    },
    {
      name: "--sbt-jar",
      description: "Use the specified jar as the sbt launcher",
      args: {
        name: "jar",
        generators: filepaths({ extensions: ["jar"] }),
      },
    },
    {
      name: "--java-home",
      description: "Alternate JAVA_HOME",
      args: {
        name: "JAVA home folder",
        template: "folders",
      },
    },
  ],
  // Only uncomment if abc takes an argument
  // args: {}
};
export default completionSpec;
